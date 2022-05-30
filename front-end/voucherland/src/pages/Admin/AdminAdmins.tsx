import React, {useEffect, useState} from "react";

import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import PageHeader from "../../components/Admin/PageHeader";
import AddAdmin from "../../components/Admin/Admins/AddAdmin";
import Admin from "../../components/Admin/Admins/Admin";
import AdminNav from "../../components/Admin/AdminNav";

import { IAdmin } from "../../utils/types";
import {AuthApi} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {LocalStorageService} from "../../utils/LocalStorageService";

export default function AdminAdmins() {
  const [enableDelete, setEnableDelete] = useState<boolean>(true);
  const [addAdmin, setAddAdmin] = useState<boolean>(false);
  const [deleteAdmin, setDeleteAdmin] = useState<boolean>(false);

  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // array that holds the selected admins
  const [selectedAdmins, setSelectedAdmins] = useState<IAdmin[]>([]);

  /**
   * Get all the users with an admin status
   */
  useEffect(() => {
    setLoading(true);
    if (LocalStorageService.getAccessToken()){
      AuthApi
          .get(RequestRoutes.ADMINS)
          .then( response => {
            setAdmins(response.data.admins);
          })
    }
    setLoading(false);
  }, []);


  const EnableDelete = () => {
    if (selectedAdmins.length === 0) {
      setEnableDelete(true);
    } else setEnableDelete(false);

    console.log(selectedAdmins.length);
  };
  
  const ToggleCreateNewAdmin = () => {
    setAddAdmin(!addAdmin);
  };

  const ToggleDeleteAdmin = () => {
    setDeleteAdmin(!deleteAdmin);
  };

  const HandleSelectedAdmin = (selectedAdmin: IAdmin, action: boolean) => {
    if (action) {
      setSelectedAdmins([...selectedAdmins, selectedAdmin]);
    } else {
      let removedAdminFromSelected: IAdmin[] = selectedAdmins.filter(
        (admin) => admin.id !== selectedAdmin.id
      );
      setSelectedAdmins([...removedAdminFromSelected]);
    }
  };

  return (
    <section className="admin admin_admins_nav" data-testid="adminadmins"  >
      <AdminNav />
      <div className="admin_content">
        <section className="admins_screen">
          <PageHeader
            pageTitle={"Admins"}
            createTitle={"Add admin"}
            handleCreatePressed={ToggleCreateNewAdmin}
            handleDeletePressed={ToggleDeleteAdmin}
            disableDelete={enableDelete}
          />

          {
            !loading &&
              <div className="admins_content">
                {admins.map((admin) => (
                    <Admin
                        enableDelete={EnableDelete}
                        handleSelectedAdmin={HandleSelectedAdmin}
                        admin={admin}
                        key={admin.id}
                    />
                ))}
              </div>
          }

          {addAdmin && (
            <AddAdmin
              cancelPressed={ToggleCreateNewAdmin}
              addAdminPressed={() => {
                console.log("created!");
              }}
            />
          )}

          {deleteAdmin && (
            <DeleteAlertMessage
              deleteTitle={"Delete admins"}
              deleteAmount={`${String(selectedAdmins.length)} admins`}
              cancelPressed={ToggleDeleteAdmin}
              deletePressed={() => {
                console.log("deleted!");
              }}
            />
          )}
        </section>
      </div>
    </section>
  );
}
