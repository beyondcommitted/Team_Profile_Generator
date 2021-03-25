  
const Manager = require ("../lib/Manager");

const validateManager = new Manager ("Tucker", 1 , "tuckerbeauchamp@gmail.com", "Manager", 6357)

describe("Manager", () => {
    it("has a name", () => {
        expect(validateManager.name).toEqual(expect.any(String))
        expect(validateManager.name.length).toBeGreaterThan(2)

    })
    it("ID is equal to a number", () => {
        expect(validateManager.id).toEqual(expect.any(Number))
    })

    it("has an email address", () => {
        expect(validateManager.email).toEqual(expect.stringContaining("@"))
    })

    it("has a role of Manager", () => {
        expect(validateManager.role).toBe("Manager")
    })

    it("office number is a number", () => {
        info = Object.keys(validateManager)
        obj = info[4]
        expect(obj).toBe("officeNumber")
        expect(validateManager.officeNumber).toEqual(expect.any(Number))
    })
})