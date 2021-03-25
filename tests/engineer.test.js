const Engineer = require("../lib/engineer");

const validateEngineer = new Engineer ("Te", 97, "teedwards@gmail.com", "Engineer", "beyondcommitted")

describe("Engineer", () => {
    it("has a name", () => {
        expect(validateEngineer.name).toEqual(expect.any(String))
        expect(validateEngineer.name.length).toBeGreaterThan(1)

    })
    it("ID is equal to a number", () => {
        expect(validateEngineer.id).toEqual(expect.any(Number))
    })

    it("has an email address", () => {
        expect(validateEngineer.email).toEqual(expect.stringContaining("@"))
    })

    it("has a role of Engineer", () => {
        expect(validateEngineer.role).toBe("Engineer")
    })

    it("has valid github username", () => {
        info = Object.keys(validateEngineer)
        obj = info[4]
        expect(obj).toBe("github")
        expect(validateEngineer.github).toEqual(expect.any(String))
    })
})
