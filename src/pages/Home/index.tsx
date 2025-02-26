import { BorderGradient } from "@/components/BorderGradient";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-red-500">
      <BorderGradient variant="primary" padding="5px">
        <div className="p-5 text-gradient-primary">123</div>
      </BorderGradient>
    </div>
  );
};

export default HomePage;
