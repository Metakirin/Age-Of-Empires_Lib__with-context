import StartNavBuilder from "./StartNavBuilder";
import AddNavBuilder from "./AddNavBuilder";

const AdditionalNavigation = ({ children }) => <>{children}</>;

AdditionalNavigation.StartNavBuilder = StartNavBuilder;
AdditionalNavigation.AddNavBuilder = AddNavBuilder;

export default AdditionalNavigation;
