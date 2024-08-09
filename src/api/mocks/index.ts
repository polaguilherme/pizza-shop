import {  setupWorker } from "msw/browser"

import { env } from "../../env"
import { approveOrderMock } from "./approve-order-mock";
import { cancelOrderMock } from "./cancled-order-mock";
import { deliverOrderMock } from "./deliver-order-mock";
import { dispatchOrderMock } from "./dispatch-order-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-receipt-in-period-mock";
import { getDayOrderAmountMock } from "./get-day-orders-amount-mock";
import {   getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-caceled-orders-mock";
import { getMonthOrderAmountMock } from "./get-month-order-amount-mock";
import { getMonthReceiptMock } from "./get-month-receipt-mock";
import { getOrderDetailsMock } from "./get-orders-details-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in-mock";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
     signInMock, 
     registerRestaurantMock,
     getDayOrderAmountMock, 
     getMonthCanceledOrdersAmountMock, 
     getMonthOrderAmountMock, 
     getMonthReceiptMock, 
     getPopularProductsMock,
     getDailyRevenueInPeriodMock,
     getProfileMock,
     getManagedRestaurantMock,
     updateProfileMock, 
     getOrdersMock,
     getOrderDetailsMock,
     approveOrderMock,
     cancelOrderMock,
     dispatchOrderMock,
     deliverOrderMock,
    );
  

export async function enableMSW(){

   if (env.MODE !== "test") {
    return;
   }

    await worker.start()
}