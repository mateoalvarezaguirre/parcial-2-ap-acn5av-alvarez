import {TaskInput} from "../components/TaskInput.tsx";
import {Header} from "../components/Header.tsx";

export const HomePage = () => {
    return (
        <div style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
        }}>
            <Header />
            <TaskInput />
        </div>
    );
};