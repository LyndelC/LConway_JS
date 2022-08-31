using System;

namespace MyApplication

public class Vehicle
{
    public class Vehicle
    {
        public string rego;
        public string make;
        public string model;
        public int kmDriven;
        Driver driver;

        public Vehicle(string rego, string make, string model, int kmDriven, Driver driver)
        {
            this.rego = rego;
            this.make = make;
            this.model = model;
            this.kmDriven = kmDriven;
            this.driver = driver;

        }
	{
        Console.WriteLine("Registration {0}, Make {1}, Model {2}, Km Driven {3}", this.rego, this.make, this.model, this.kmDriven);
	}
}



