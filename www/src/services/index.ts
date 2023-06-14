import ActivitiesServices from "./ActivitiesServices";
import AuthServices from "./AuthServices";
import UsersServices from "./UserServices";

class Services {
  get users() {
    return new UsersServices();
  }
  get authenticate() {
    return new AuthServices();
  }
  get activities() {
    return new ActivitiesServices();
  }
}

const services = new Services();
export default services;
