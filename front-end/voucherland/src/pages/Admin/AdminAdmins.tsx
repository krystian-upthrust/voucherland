import React, { useState } from "react";

import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import PageHeader from "../../components/Admin/PageHeader";
import AddAdmin from "../../components/Admin/Admins/AddAdmin";
import Admin from "../../components/Admin/Admins/Admin";
import AdminNav from "../../components/Admin/AdminNav";

import { IAdmin } from "../../utils/types";

// admin prop-data
const admins: IAdmin[] = [
  {
    id: 1,
    name: "jane doe1",
    email: "jane.doe1@gmail.com",
  },
  {
    id: 2,
    name: "jane doe2",
    email: "jane.doe2@gmail.com",
  },
  {
    id: 3,
    name: "jane doe3",
    email: "jane.doe3@gmail.com",
  },
];

export default function AdminAdmins() {
  const [enableDelete, setEnableDelete] = useState<boolean>(true);
  const [addAdmin, setAddAdmin] = useState<boolean>(false);
  const [deleteAdmin, setDeleteAdmin] = useState<boolean>(false);

  // array that holds the selected admins
  const [selectedAdmins, setSelectedAdmins] = useState<IAdmin[]>([]);

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
    <section className="admin admin_admins_nav">
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
