const Intern = require ("../lib/Intern");

const validateIntern = new Intern ("Adrien", 29, "gsat@gmail.com", "Intern", "UofA")

describe("Intern", () => {
    it("has a name", () => {
        expect(validateIntern.name).toEqual(expect.any(String))
        expect(validateIntern.name.length).toBeGreaterThan(2)

    })
    it("ID is equal to a number", () => {
        expect(validateIntern.id).toEqual(expect.any(Number))
    })

    it("has an email address", () => {
        expect(validateIntern.email).toEqual(expect.stringContaining("@"))
    })

    it("has a role of intern", () => {
        expect(validateIntern.role).toBe("Intern")
    })

    it("has a school ", () => {
        info = Object.keys(validateIntern )
        obj = info[4]
        expect(obj).toBe("school")
        expect(validateIntern.school).toEqual(expect.any(String))
    })
})

