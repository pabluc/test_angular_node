export class Apiconfig {
    private static ApiIP: string = "test-node-angular.herokuapp.com"; //"app-obli-devops-backend.herokuapp.com";
    private static ApiProtocol: string = "http://";
    private static ApiPort: string = ""; //:4100
  
    public static getIP() : string {
      return this.ApiIP;
    }
  
    public static getPort() : string {
      return this.ApiPort;
    }

    public static getProtocol() : string {
      return this.ApiProtocol;
    }
  }