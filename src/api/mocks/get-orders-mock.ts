import { http, HttpResponse } from "msw";

import { GetOrdersResponse } from "../get-orders";
type OrderStatus = GetOrdersResponse["orders"][number]["status"];

const statuses: OrderStatus[] = ["pending", "canceled", "processing", "delivering", "delivered"]

type Orders = GetOrdersResponse["orders"];

const orders: Orders = Array.from({length: 60}).map((_, index) => ({
    orderId: `order-${index + 1}`,
    createdAt: new Date().toISOString(),
    status:  statuses[index % statuses.length],
    customerName: `Customer ${index + 1}`,
    total: Math.random() * 1000,
  }));
 

 export  const getOrdersMock = http.get<never, never, GetOrdersResponse>("/orders", async ({ request }) => {
    const { searchParams } = new URL(request.url);
  
    const pageIndex = searchParams.get("pageIndex") ? Number(searchParams.get("pageIndex")) : 0;
  
    const customerName = searchParams.get("customerName");
    const status = searchParams.get("status");
    const orderId = searchParams.get("orderId");
  
    let filteredOrders = orders;
  
    if (customerName) {
      filteredOrders = filteredOrders.filter(order => order.customerName.includes(customerName));
    }
  
    if (status) {
      filteredOrders = filteredOrders.filter(order => order.status === status);
    }
  
    if (orderId) {
      filteredOrders = filteredOrders.filter(order => order.orderId.includes(orderId));
    }
  
    const paginatedOrders = filteredOrders.slice(pageIndex * 10, (pageIndex + 1) * 10);
  
    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    });
  });