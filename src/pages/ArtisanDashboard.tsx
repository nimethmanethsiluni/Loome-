import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Package, Settings, ShoppingCart } from "lucide-react";

const ArtisanDashboard = () => {
  // Mock data for products
  const products = [
    { id: 1, name: "Batik Scarf", price: "$25.00" },
    { id: 2, name: "Handwoven Saree", price: "$75.00" },
    { id: 3, name: "Clay Pottery", price: "$40.00" },
  ];

  // Mock data for orders
  const orders = [
    { id: 101, customer: "Alice Smith", total: "$50.00", status: "Pending" },
    { id: 102, customer: "Bob Johnson", total: "$150.00", status: "Shipped" },
  ];

  return (
    <div className="min-h-screen bg-[#faf5f2] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2b1a17] mb-8">Artisan Dashboard</h1>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">
              <Package className="mr-2 h-4 w-4" /> Products
            </TabsTrigger>
            <TabsTrigger value="orders">
              <ShoppingCart className="mr-2 h-4 w-4" /> Orders
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button>Add Product</Button>
                </div>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.price}</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-gray-500">Customer: {order.customer}</p>
                        <p className="text-sm text-gray-500">Total: {order.total}</p>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-400 border rounded-lg">
                  <LineChart className="h-16 w-16" />
                  <p className="ml-4">Placeholder for analytics charts</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-400 border rounded-lg">
                  <Settings className="h-16 w-16" />
                  <p className="ml-4">Placeholder for artisan account settings</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtisanDashboard;
