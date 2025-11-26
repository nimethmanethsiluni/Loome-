import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<string | null>(null);
  const { login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const resetLogin = params.get("resetLogin");
    if (resetLogin === "true") {
      setUserType(null); // Reset userType to re-initiate the selection
    }
  }, [location]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    login({ name: "Test User", email: "test@example.com", userType });
    if (userType === "artisan") {
      navigate("/artisan-dashboard");
    } else {
      navigate("/");
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-[#faf5f2] py-16 px-4 flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Choose your role</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button onClick={() => setUserType("customer")}>Customer</Button>
            <Button onClick={() => setUserType("artisan")}>Artisan</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf5f2] py-16 px-4 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2b1a17]">Login as {userType}</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="test@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-[#7f0303] text-white hover:bg-[#5a0202]">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
