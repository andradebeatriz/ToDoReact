import {Route, Routes} from 'react-router-dom';

import { Pagina404 } from './pages/Pagina404/Pagina404';
import { Inicial, SobreNos } from './pages';
import { LayoutPadrao } from './layouts';


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao/>}>
                <Route index element={<Inicial />} />
                <Route path="/sobre-nos" element={<SobreNos/>}/>
                <Route path="*" element={<Pagina404 />} />
            </Route>
        </Routes>
    );
};

export {Router};