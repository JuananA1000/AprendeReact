// --------------------------------------------------------------- //
// ------------------- TEMA 0. create-react-app ------------------ //
// --------------------------------------------------------------- //
import Crear from '../0_Crear/Crear';

// --------------------------------------------------------------- //
// ----------------- TEMA 1. Introduccion a React ---------------- //
// --------------------------------------------------------------- //
import IntroT1 from '../1_Introduccion/1_Introduccion';

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
import DepurarRedux from '../10_Redux/3_Depurar_Redux';

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
// ------------------- TEMA 1x. Java Web Tokens ------------------ //
// --------------------------------------------------------------- //
import IntroT1y from '../xx_JWT/1_Introduccion';

// --------------------------------------------------------------- //
// -                          EXTRAS                             - //
// --------------------------------------------------------------- //

// * REACT ROUTER
import { NavLink, Route, Routes } from 'react-router-dom';

// * REDUX
import { store } from '../10_Redux/store/store';
import { Provider } from 'react-redux';

// * CSS
import './DataRouter.css'; // Importa tu archivo de estilos aquí

// * lITERALES
import text from '../translations/es/global.json';

export default function App() {
  return (
    <div>
      <div>
        <h1>Índice</h1>

        <nav>
          <ul>
            <li>
              <NavLink to='/intro-t1'>{text['datarouter-page-navlink-t1']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t2'>{text['datarouter-page-navlink-t2']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t3'>{text['datarouter-page-navlink-t3']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t4'>{text['datarouter-page-navlink-t4']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t5'>{text['datarouter-page-navlink-t5']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t6'>{text['datarouter-page-navlink-t6']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t7'>{text['datarouter-page-navlink-t7']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t8'>{text['datarouter-page-navlink-t8']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t9'>{text['datarouter-page-navlink-t9']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t10'>{text['datarouter-page-navlink-t10']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t11'>{text['datarouter-page-navlink-t11']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t12'>{text['datarouter-page-navlink-t12']}</NavLink>
            </li>
            <li>
              <NavLink to='/intro-t13'>{text['datarouter-page-navlink-t13']}</NavLink>
            </li>
          </ul>
        </nav>

        <section>
          <Routes>
            <Route
              // Esta ruta es provisional. En el futuro esta será la intro de la página, con el botón de create-react-app
              path='/'
              element={<h1>Holi</h1>}
            />
            <Route path='/intro-t1' element={<IntroT1 />} />
            <Route path='/intro-t2' element={<IntroT2 />}>
              <Route path='estado' element={<ElEstado />} />
              <Route path='renderizar-componente' element={<RenderizarComponente />} />
            </Route>
            <Route path='/intro-t3' element={<IntroT3 />} />
            <Route path='/intro-t4' element={<IntroT4 />} />
            <Route path='/intro-t5' element={<IntroT5 />} />
            <Route path='/intro-t6' element={<IntroT6 />} />
            <Route path='/intro-t7' element={<IntroT7 />} />
            <Route path='/intro-t8' element={<IntroT8 />} />
            <Route path='/intro-t9' element={<IntroT9 />} />
            <Route path='/intro-t10' element={<IntroT10 />} />
            <Route path='/intro-t11' element={<IntroT11 />} />
            <Route path='/intro-t12' element={<IntroT12 />} />
            <Route path='/intro-t13' element={<IntroT13 />} />
            <Route path='*' element={<h1>{text['datarouter-page-not-found-component']}</h1>} />
          </Routes>
        </section>
      </div>

      {/* 

      <div>
        <IntroT2 />
        <ElEstado />
        <RenderizarComponente />
      </div>

      <div>
        <IntroT3 />
        <UseState />
        <UseEffect />
        <UseReducer />
        <UseRef />
      </div>

      <div>
        <IntroT4 />
        <CompNoCtrl />
        <CompCtrl />
        <ValoresMultiples />
      </div>

      <div>
        <IntroT5 />
        <Validaciones />
        <EliminaCodigoRepe />
        <CompFormik />
        <CompCustom />
      </div>

      <div>
        <IntroT6 />
        <PropsDinamicas />
        <ExtendiendoEstilos />
        <Animaciones />
      </div>

      <div>
        <IntroT7 />
        <MemoConChildren />
        <UseCallback />
        <UseMemo />
      </div>

      <div>
        <IntroT8 />
        <ActualizarEstado />
        <ProblemaDeContext />
        <ContextEnComponentesDeClase />
        <MultiplesContextos />
        <MultiplesContextosEnCompFunc />
      </div>

      <div>
          <IntroT9 />
          <CreandoSPA />
          <CapturarSegmentosDinamicos />
          <RutasAnidadas />
          <LinksActivos />
          <UseRoutes />
          <UseAuth />
      </div>

      <div>
        <Provider store={store}>
          <IntroT10 />
          <CompYEstadoGlobal />
          <DepurarRedux />
        </Provider>
      </div>

      <div>
        <IntroT11 />
        <FetchComoUnPRO />
        <FetchConCustomHooks />
        <ComprobarPeticion />
        <CancelarPeticion />
        <RenderAsYouFetch />
      </div>

      <div>
        <IntroT12 />
      </div>

      <div>
        <IntroT13 />
        <ActualizarDatos />
        <ActualizarDatosAsync />
        <LimpiarEstado />
        <MetodoGet />
      </div>

      <div>
        <IntroT1y />
      </div> */}
    </div>
  );
}
