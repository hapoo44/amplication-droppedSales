import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DroppedUserList } from "./droppedUser/DroppedUserList";
import { DroppedUserCreate } from "./droppedUser/DroppedUserCreate";
import { DroppedUserEdit } from "./droppedUser/DroppedUserEdit";
import { DroppedUserShow } from "./droppedUser/DroppedUserShow";
import { SaleList } from "./sale/SaleList";
import { SaleCreate } from "./sale/SaleCreate";
import { SaleEdit } from "./sale/SaleEdit";
import { SaleShow } from "./sale/SaleShow";
import { ContactFileList } from "./contactFile/ContactFileList";
import { ContactFileCreate } from "./contactFile/ContactFileCreate";
import { ContactFileEdit } from "./contactFile/ContactFileEdit";
import { ContactFileShow } from "./contactFile/ContactFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Dropped Users"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="DroppedUser"
          list={DroppedUserList}
          edit={DroppedUserEdit}
          create={DroppedUserCreate}
          show={DroppedUserShow}
        />
        <Resource
          name="Sale"
          list={SaleList}
          edit={SaleEdit}
          create={SaleCreate}
          show={SaleShow}
        />
        <Resource
          name="ContactFile"
          list={ContactFileList}
          edit={ContactFileEdit}
          create={ContactFileCreate}
          show={ContactFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
