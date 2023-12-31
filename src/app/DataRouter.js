// --------------------------------------------------------------- //
// ------------------- TEMA 0. create-react-app ------------------ //
// --------------------------------------------------------------- //
import Crear from '../0_Crear/Crear';

// --------------------------------------------------------------- //
// ----------------- TEMA 1. Introduccion a React ---------------- //
// --------------------------------------------------------------- //
import IntroT1 from '../1_Introduccion/1_Introduccion';
import EstructuraDelProyecto from '../1_Introduccion/2_Estructura_del_proyecto';

// --------------------------------------------------------------- //
// ------------ TEMA 2. Componentes basados en clases ------------ //
// --------------------------------------------------------------- //
import IntroT2 from '../2_Componentes_con_Clases/1_Introduccion';
import ElEstado from '../2_Componentes_con_Clases/2_El_Estado';
import RenderizarComponente from '../2_Componentes_con_Clases/3_Renderizar_componente';

// --------------------------------------------------------------- //
// --------------- TEMA 3. Componentes Funcionales --------------- //
// --------------------------------------------------------------- //
import IntroT3 from '../3_Componentes_Funcionales/1_Introduccion';
import UseState from '../3_Componentes_Funcionales/2_UseState';
import UseEffect from '../3_Componentes_Funcionales/3_UseEffect';
import UseReducer from '../3_Componentes_Funcionales/4_UseReducer';
import UseRef from '../3_Componentes_Funcionales/5_UseRef';

// --------------------------------------------------------------- //
// --------------------- TEMA 4. Formularios --------------------- //
// --------------------------------------------------------------- //
import IntroT4 from '../4_Formularios/1_Introduccion';
import CompNoCtrl from '../4_Formularios/2_Comp_No_Controlados';
import CompCtrl from '../4_Formularios/3_Comp_Controlados';
import ValoresMultiples from '../4_Formularios/4_Valores_Multiples';

// --------------------------------------------------------------- //
// ---------------- TEMA 5. Formularios con Formik --------------- //
// --------------------------------------------------------------- //
import IntroT5 from '../5_Formularios_con_Formik/1_Introduccion';
import Validaciones from '../5_Formularios_con_Formik/2_Validaciones';
import EliminaCodigoRepe from '../5_Formularios_con_Formik/3_Eliminar_codigo_repetitivo';
import CompFormik from '../5_Formularios_con_Formik/4_Componente_formik';
import CompCustom from '../5_Formularios_con_Formik/5_Componentes_custom';

// --------------------------------------------------------------- //
// ------------------ TEMA 6. Styled Components ------------------ //
// --------------------------------------------------------------- //
import IntroT6 from '../6_Styled_Components/1_Introduccion';
import PropsDinamicas from '../6_Styled_Components/2_Props_dinamicas';
import ExtendiendoEstilos from '../6_Styled_Components/3_Extendiendo_estilos';
import Animaciones from '../6_Styled_Components/4_Animaciones';

// --------------------------------------------------------------- //
// --------------------- TEMA 7. Rendimiento --------------------- //
// --------------------------------------------------------------- //
import IntroT7 from '../7_Rendimiento/1_Introduccion';
import MemoConChildren from '../7_Rendimiento/2_Memo_con_children';
import UseCallback from '../7_Rendimiento/3_UseCallback';
import UseMemo from '../7_Rendimiento/4_UseMemo';

// --------------------------------------------------------------- //
// ----------------------- TEMA 8. Context ----------------------- //
// --------------------------------------------------------------- //
import IntroT8 from '../8_Context/1_Introduccion';
import ActualizarEstado from '../8_Context/2_Actualizar_estado';
import ProblemaDeContext from '../8_Context/3_Problema_de_Context';
import ContextEnComponentesDeClase from '../8_Context/4_Context_en_componentes_de_clase';
import MultiplesContextos from '../8_Context/5_Multiples_contextos';
import MultiplesContextosEnCompFunc from '../8_Context/6_Multiples_contextos_en_comp_func';

// --------------------------------------------------------------- //
// --------------------- TEMA 9. React Router -------------------- //
// --------------------------------------------------------------- //
import IntroT9 from '../9_React_Router/1_Introduccion';
import CreandoSPA from '../9_React_Router/2_Creando_SPA';
import CapturarSegmentosDinamicos from '../9_React_Router/3_Capturar_segmentos_dinamicos';
import RutasAnidadas from '../9_React_Router/4_Rutas_anidadas';
import LinksActivos from '../9_React_Router/4.1_Links_activos';
import UseRoutes from '../9_React_Router/5_UseRoutes';
import UseAuth from '../9_React_Router/6_UseAuth';

// --------------------------------------------------------------- //
// ------------------------ TEMA 10. Redux ----------------------- //
// --------------------------------------------------------------- //
import IntroT10 from '../10_Redux/1_Introduccion';
import CompYEstadoGlobal from '../10_Redux/2_Comp_y_estado_global';
import DepurarRedux from '../10_Redux/4_Depurar_Redux';

// --------------------------------------------------------------- //
// ------------------- TEMA 11. Conexión a APIs ------------------ //
// --------------------------------------------------------------- //
import IntroT11 from '../11_Conexion_a_APIs/1_Introduccion';
import FetchComoUnPRO from '../11_Conexion_a_APIs/2_Fetch_como_un_pro';
import FetchConCustomHooks from '../11_Conexion_a_APIs/3_Fetch_con_custom_hooks';
import ComprobarPeticion from '../11_Conexion_a_APIs/4_Comprobar_peticion';
import CancelarPeticion from '../11_Conexion_a_APIs/5_Cancelar_peticion';
import RenderAsYouFetch from '../11_Conexion_a_APIs/6_RenderAsYouFetch';

// --------------------------------------------------------------- //
// ------------------- TEMA 12. Librería AXIOS ------------------- //
// --------------------------------------------------------------- //
import IntroT12 from '../12_Axios/1_Introduccion';

// --------------------------------------------------------------- //
// ------------------- TEMA 13. Librería ZUSTAND ----------------- //
// --------------------------------------------------------------- //
import IntroT13 from '../13_Zustand/1_Introduccion';
import ActualizarDatos from '../13_Zustand/2_Actualizar_datos';
import ActualizarDatosAsync from '../13_Zustand/3_Actualizar_datos_async';
import LimpiarEstado from '../13_Zustand/4_Limpiar_estado';
import MetodoGet from '../13_Zustand/5_Metodo_get';

// --------------------------------------------------------------- //
// -------------------- TEMA 14. Drag and Drop ------------------- //
// --------------------------------------------------------------- //
import IntroT14 from '../14_Drag_and_Drop/1_Introduccion';

// --------------------------------------------------------------- //
// -                          EXTRAS                             - //
// --------------------------------------------------------------- //
// * REACT ROUTER
import { Route, Routes } from 'react-router-dom';
// * REDUX
import { store } from '../10_Redux/store/store';
import { Provider } from 'react-redux';
// * CSS
import './DataRouter.css'; // Importa tu archivo de estilos aquí
// * lITERALES
import text from '../translations/es/global.json';
import SideBar from '../components/SideBar/SideBar';
// * TRADUCTOR
import Traductor from '../components/Traductor/Traductor';

export default function App() {
  return (
    <div>
      <div>
        <section>
          <Routes>
            <Route
              path='/'
              element={<Crear />}
            />
            <Route
              path='/tema1'
              element={
                <SideBar>
                  <IntroT1 />
                  <EstructuraDelProyecto />
                </SideBar>
              }
            />
            <Route
              path='/tema2'
              element={
                <SideBar>
                  <IntroT2 />
                  <ElEstado />
                  <RenderizarComponente />
                </SideBar>
              }></Route>
            <Route
              path='/tema3'
              element={
                <SideBar>
                  <IntroT3 />
                  <UseState />
                  <UseEffect />
                  <UseReducer />
                  <UseRef />
                </SideBar>
              }
            />
            <Route
              path='/tema4'
              element={
                <SideBar>
                  <IntroT4 />
                  <CompNoCtrl />
                  <CompCtrl />
                  <ValoresMultiples />
                </SideBar>
              }
            />
            <Route
              path='/tema5'
              element={
                <SideBar>
                  <IntroT5 />
                  <Validaciones />
                  <EliminaCodigoRepe />
                  <CompFormik />
                  <CompCustom />
                </SideBar>
              }
            />
            <Route
              path='/tema6'
              element={
                <SideBar>
                  <IntroT6 />
                  <PropsDinamicas />
                  <ExtendiendoEstilos />
                  <Animaciones />
                </SideBar>
              }
            />
            <Route
              path='/tema7'
              element={
                <SideBar>
                  <IntroT7 />
                  <MemoConChildren />
                  <UseCallback />
                  <UseMemo />
                </SideBar>
              }
            />
            <Route
              path='/tema8'
              element={
                <SideBar>
                  <IntroT8 />
                  <ActualizarEstado />
                  <ProblemaDeContext />
                  <ContextEnComponentesDeClase />
                  <MultiplesContextos />
                  <MultiplesContextosEnCompFunc />
                </SideBar>
              }
            />
            <Route
              path='/tema9'
              element={
                <SideBar>
                  <IntroT9 />
                  <CreandoSPA />
                  <CapturarSegmentosDinamicos />
                  <RutasAnidadas />
                  <LinksActivos />
                  <UseRoutes />
                  <UseAuth />
                </SideBar>
              }
            />
            <Route
              path='/tema10'
              element={
                <SideBar>
                  <Provider store={store}>
                    <IntroT10 />
                    <CompYEstadoGlobal />
                    <DepurarRedux />
                  </Provider>
                </SideBar>
              }
            />
            <Route
              path='/tema11'
              element={
                <SideBar>
                  <IntroT11 />
                  <FetchComoUnPRO />
                  <FetchConCustomHooks />
                  <ComprobarPeticion />
                  <CancelarPeticion />
                  <RenderAsYouFetch />
                </SideBar>
              }
            />
            <Route
              path='/tema12'
              element={
                <SideBar>
                  <IntroT12 />
                </SideBar>
              }
            />
            <Route
              path='/tema13'
              element={
                <SideBar>
                  <IntroT13 />
                  <ActualizarDatos />
                  <ActualizarDatosAsync />
                  <LimpiarEstado />
                  <MetodoGet />
                </SideBar>
              }
            />
            <Route
              path='/tema14'
              element={
                <SideBar>
                  <IntroT14 />
                </SideBar>
              }
            />

            <Route
              path='*'
              element={
                <SideBar>
                  <h1>{text['datarouter-page-not-found-component']}</h1>
                </SideBar>
              }
            />
          </Routes>

        </section>
      </div>
    </div>
  );
}
