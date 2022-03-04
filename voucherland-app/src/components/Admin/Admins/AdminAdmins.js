import React, { useState } from "react";
import PageHeader from "../PageHeader";
import AddAdmin from "./AddAdmin";
import Admin from "./Admin";
import DeleteAdmin from "./DeleteAdmin";

const admins = [
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
  const [enableDelete, setEnableDelete] = useState(true);
  const [addAdmin, setAddAdmin] = useState(false);
  const [deleteAdmin, setDeleteAdmin] = useState(false);

  // array of trues and false to check if true in array means admin selected
  const [selectedAdmins, setSelectedAdmins] = useState([]);

  const EnableDelete = () => {
    if(selectedAdmins.length === 0){
      setEnableDelete(true);
    } else setEnableDelete(false);

    console.log(selectedAdmins.length)
  };
  const ToggleCreateNewAdmin = () => {
    setAddAdmin(!addAdmin);
  };
  const ToggleDeleteAdmin = () => {
    setDeleteAdmin(!deleteAdmin);
  };

  const HandleSelectedAdmin = (selectedAdmin, action) => {
    if(action) {
      setSelectedAdmins([...selectedAdmins, selectedAdmin]);
    }else {
      let removedAdminFromSelected = selectedAdmins.filter( admin => admin.id != selectedAdmin.id );
      setSelectedAdmins([...removedAdminFromSelected]);
    }
  };

  return (
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
        <DeleteAdmin
          cancelPressed={ToggleDeleteAdmin}
          deleteAmount={String(selectedAdmins.length)}
          deletePressed={() => {
            console.log("deleted!");
          }}
        />
      )}
    </section>
  );
}
