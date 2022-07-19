import CircularProgress from "@mui/material/CircularProgress";
import { LoadingContainer } from "./styled";
const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress color="primary" size={42} />
        </LoadingContainer>
    );

};
export default Loading;