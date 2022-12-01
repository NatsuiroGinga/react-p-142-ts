import React from "react";
import Bar from "@/components/Bar";

const Home: React.FC = () => {
    return (
        <div>
            <Bar
                title={"主流框架使用满意度"}
                xData={["react", "vue", "angular"]}
                yData={[30, 40, 50]}
                style={{width: "500px", height: "400px"}}/>
            <Bar
                title={"主流框架使用满意度"}
                xData={["react", "vue", "angular"]}
                yData={[60, 70, 80]}
                style={{width: "300px", height: "200px"}}/>
        </div>
    );
};

export default Home;