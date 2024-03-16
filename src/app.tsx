import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router.tsx";
import MainProvider from "@/providers/main-provider.tsx";

const App = () => {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
};

export default App;
