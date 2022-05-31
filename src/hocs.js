import { useNavigate } from "react-router-dom"

const withNavigation = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  return <WrappedComponent navigate={navigate} {...props} />;
};

export default withNavigation;