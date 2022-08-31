using System;

namespace MyApplication

{
    public class Driver
    {
        public string licenseNo;
        public string firstName;
        public string lastName;
        public int mobile;
        public string driverStreet;
        public string driverCity;
        public string driverState;
        public int driverPcode;
        public string licenseStates;
        public int demeritPoints;

        public Driver(string licenseNo, string firstName, string lastName, int mobile, string driverStreet, string driverCity, string driverState, int driverPcode, string licenseStates, int demeritPoints)
        {
            this.licenseNo = licenseNo;
            this.firstName = firstName;
            this.lastName = lastName;
            this.mobile = mobile;
            this.driverStreet = driverStreet;
            this.driverCity = driverCity;
            this.driverState = driverState;
            this.driverPcode = driverPcode;
            this.licenseStates = licenseStates;
            this.demeritPoints = demeritPoints;

        }

    }
}
