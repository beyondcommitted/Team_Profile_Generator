const Employee = require("../lib/employee");

const validationTest = new Employee ("Breon", 14, "beyond.committed@gmail.com", "Employee");
describe("Employee", () => {
    it("has a name", () => {
        expect(validationTest.name).toEqual(expect.any(String))
        expect(validationTest.name.length).toBeGreaterThan(2)
    })

    it("ID is equal to a number", () => {
        expect(validationTest.id).toEqual(expect.any(Number))
    })

    it("has an email address", () => {
        expect(validationTest.email).toEqual(expect.stringContaining("@"))
    })

    it("Role is chosen", () => {
        expect(validationTest.role).toBe("Employee")
    })
})