import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { Dashboard } from "./components/Dashboard";
import { RecipeView } from "./components/RecipeView";
import { NewRecipePage } from "./components/NewRecipePage";
import { toast } from "sonner";
import { recipeDatabase } from "./data/recipes";

export default function App() {
  const [user, setUser] = useState(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [creatingNewRecipe, setCreatingNewRecipe] = useState(false);
  const [recipes, setRecipes] = useState(recipeDatabase);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedRecipeId(null);
  };

  const handleSelectRecipe = (recipeId) => {
    setSelectedRecipeId(recipeId);
  };

  const handleBackToDashboard = () => {
    setSelectedRecipeId(null);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [{ ...newRecipe }, ...prev]);
  };

  const handleStartNewRecipe = () => {
    if (recipes.length >= 10) {
      // Notificar límite alcanzado
      try {
        toast && toast.error("Límite de 10 recetas del semestre alcanzado");
      } catch {}
      return;
    }
    setCreatingNewRecipe(true);
  };

  const handleCancelNewRecipe = () => {
    setCreatingNewRecipe(false);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (selectedRecipeId) {
    return (
      <RecipeView
        recipeId={selectedRecipeId}
        user={user}
        onBack={handleBackToDashboard}
        onLogout={handleLogout}
      />
    );
  }

  if (creatingNewRecipe) {
    return (
      <NewRecipePage
        onCancel={handleCancelNewRecipe}
        onSave={(payload) => {
          handleAddRecipe(payload);
          setCreatingNewRecipe(false);
        }}
      />
    );
  }

  return (
    <Dashboard
      user={user}
      recipes={recipes}
      onLogout={handleLogout}
      onSelectRecipe={handleSelectRecipe}
      onAddRecipe={handleAddRecipe}
      onStartNewRecipe={handleStartNewRecipe}
    />
  );
}
