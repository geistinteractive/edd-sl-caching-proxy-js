import { AxiosResponse } from "axios";
export default class EDDSL {
    private proxyURL;
    /**
     *
     * @param proxyURL the url to the proxy server
     */
    constructor(proxyURL: string);
    /**
     * checks a license to see if it is still valid
     *
     * async and cached
     *
     * @param license the EDD License
     * @param itemId  the item ID that the license belongs too
     * @param activationId a string representing a unique install or device. EDD uses url
     */
    licenseCheck(license: string, itemId: string, activationId: string): Promise<AxiosResponse>;
    /**
     * activate a license
     *
     * async
     *
     * @param license edd license
     * @param itemId the itemId of the license to activate
     * @param activationId a string that uniqiely IDs the device
     */
    licenseActivate(license: string, itemId: string, activationId: string): Promise<AxiosResponse>;
    /**
     * deactivate a license
     *
     * async
     *
     * @param license edd license
     * @param itemId the itemId of the license to deactivate
     * @param activationId a string that uniqiely IDs the device
     */
    liceseDeactivate(license: string, itemId: string, activationId: string): Promise<AxiosResponse>;
    /**
     * requires that the user is loggedIn already
     *
     * async
     *
     * @param productName this is the Item Name, NOT the Item Id that is used on the license methods
     * @returns an array of licenses with sales data
     */
    userLicenses(productName?: string): Promise<Array<Object>>;
    /**
     * login to EDD/Wordpress
     * @param username the username or email address for the wordpress account
     * @param password the password
     */
    login(username: string, password: string): Promise<AxiosResponse>;
    /**
     * gets the user data from storage
     *
     * not async
     */
    user(): any;
    /**
     * log the currently logged in user out
     *
     * removes token and user data, but does not revoke the token
     */
    logout(): boolean;
    /**
     * is the user logged in or not
     *
     * async
     *
     * @returns {boolean} if the user is logged in
     */
    isLoggedIn(): Promise<boolean>;
    /**
     *
     * @param license the license to work with
     * @param itemId the item id for the product
     * @param activationId the unique id for this activation
     * @param action what action to take
     */
    private licenseRequest(license, itemId, activationId, action);
    private getUserDataFromStorage();
    private deleteStoredUserData();
    private storeUserData(data);
    private getStoredToken();
}
