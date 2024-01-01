import React, { createContext, useContext, useEffect, ReactNode } from "react";

interface SnapCountProviderProps {
  children: ReactNode;
}

interface SnapCountContextProps {
  // You can include other data in the context if needed
}

// Create a context for the count and other data
const SnapCountContext = createContext<SnapCountContextProps | undefined>(
  undefined
);

// Create a provider component
export const SnapCountProvider: React.FC<SnapCountProviderProps> = ({
  children,
}) => {
  // Example image URL (replace with your actual image URL)
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg";

  const imageWidth = "500px"; // Adjust as needed
  const imageHeight = "300px"; // Adjust as needed
  // Update the styling for elements with class name "snap" when the component mounts
  useEffect(() => {
    const elements = document.querySelectorAll(".snap");
    elements.forEach((element) => {
      (element as HTMLElement).style.backgroundImage = `url(${imageUrl})`;
      (element as HTMLElement).style.backgroundSize = "cover"; // Adust this as needed
      (element as HTMLElement).style.width = imageWidth;
      (element as HTMLElement).style.height = imageHeight;
    });
  }, [imageUrl]); // Include imageUrl in the dependency array

  return (
    <SnapCountContext.Provider value={{}}>{children}</SnapCountContext.Provider>
  );
};

// Custom hook to get the context data
export const useSnapCount = (): SnapCountContextProps => {
  const context = useContext(SnapCountContext);

  if (!context) {
    throw new Error("useSnapCount must be used within a SnapCountProvider");
  }

  return context;
};
