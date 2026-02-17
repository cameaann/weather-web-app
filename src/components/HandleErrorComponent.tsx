import type { ErrorType } from "../contexts/weatherProvider";
import ErrorIcon from "../assets/images/icon-error.svg";
import RetryIcon from "../assets/images/icon-retry.svg";
import Button from "./custom/Button";

const HandleErrorComponent = ({ error }: { error: ErrorType}) => {
  return (
    <div className="h-[30.8rem] flex flex-col items-center align-center justify-center p-6 gap-6">
      <img className="w-20 my-10" src={ErrorIcon} alt="error icon" />
      <p className="font-bold text-6xl">Something went wrong</p>
      <p className="text-2xl text-color-neutral-0 text-center max-w-2xl">
        {error.message}
      </p>
      <Button className="retry-btn" size="lg"  onClick={()=> window.location.reload()}>
        <img className="w-6 h-6 inline-block mr-2" src={RetryIcon} alt="retry icon" />
        Retry</Button>
    </div>
  );
};

export default HandleErrorComponent;
