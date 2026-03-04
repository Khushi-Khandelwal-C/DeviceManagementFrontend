import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DeviceList } from './components/device/device-list/device-list';
import { DeviceCreate } from './components/device/device-create/device-create';
import { DeviceEdit } from './components/device/device-edit/device-edit';
import { DeviceSummary } from './components/device/device-summary/device-summary';
import { ShelfList } from './components/shelf/shelf-list/shelf-list';
import { ShelfCreate } from './components/shelf/shelf-create/shelf-create';
import { ShelfSummary } from './components/shelf/shelf-summary/shelf-summary';
import { ShelfEdit } from './components/shelf/shelf-edit/shelf-edit';

export const routes: Routes = [
    {
        path : "",
        redirectTo : "home",
        pathMatch : 'full'
    },
    {
        path : "home",
        component : Home
    }, 

    //-------------DEVICES ROUTES-----------

    {
        path : "devices",
        component : DeviceList
    },
    {
        path : "devices/new",
        component : DeviceCreate
    },
    {
        path : "devices/:deviceId",
        component : DeviceSummary
    },
    {
        path : "devices/:deviceId/edit",
        component : DeviceEdit
    },

     //-------------DEVICES ROUTES-----------
    {
        path : "shelves",
        component : ShelfList
    },
    {
        path : "shelves/new",
        component : ShelfCreate
    },
    {
        path : "shelves/:shelfId",
        component : ShelfSummary
    },
    {
        path : "shelves/:shelfId/edit",
        component : ShelfEdit
    },
    {
        path : "**" ,redirectTo : "home"
    }



];
