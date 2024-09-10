import CategoryPills from "./component/CategoryPills";
import PageHeader from "./layouts/PageHeader";
import { categories, videos } from "./data/home";
import React, { useState } from "react";
import VideoGridItem from "./component/VideoGridItem";
import Sidebar from "./layouts/Sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader></PageHeader>
        <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              ></CategoryPills>
            </div>
            <div className="grid gap-4 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
              {videos.map((video) => (
                <React.Fragment key={video.id}>
                  <VideoGridItem {...video} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
