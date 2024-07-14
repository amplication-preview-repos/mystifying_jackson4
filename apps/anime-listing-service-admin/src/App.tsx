import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnimeList } from "./anime/AnimeList";
import { AnimeCreate } from "./anime/AnimeCreate";
import { AnimeEdit } from "./anime/AnimeEdit";
import { AnimeShow } from "./anime/AnimeShow";
import { ProductionHouseList } from "./productionHouse/ProductionHouseList";
import { ProductionHouseCreate } from "./productionHouse/ProductionHouseCreate";
import { ProductionHouseEdit } from "./productionHouse/ProductionHouseEdit";
import { ProductionHouseShow } from "./productionHouse/ProductionHouseShow";
import { GenreList } from "./genre/GenreList";
import { GenreCreate } from "./genre/GenreCreate";
import { GenreEdit } from "./genre/GenreEdit";
import { GenreShow } from "./genre/GenreShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
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
        title={"AnimeListingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Anime"
          list={AnimeList}
          edit={AnimeEdit}
          create={AnimeCreate}
          show={AnimeShow}
        />
        <Resource
          name="ProductionHouse"
          list={ProductionHouseList}
          edit={ProductionHouseEdit}
          create={ProductionHouseCreate}
          show={ProductionHouseShow}
        />
        <Resource
          name="Genre"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
          show={GenreShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
