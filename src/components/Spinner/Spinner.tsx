import classes from "./Spinner.module.scss";

export const Spinner = () => {
  return <div data-testid="loadingSpinner" className={classes.loader} />;
};
