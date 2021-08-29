const rewire = require("rewire")
const socketMiddleware = rewire("./socketMiddleware")
const onOpen = socketMiddleware.__get__("onOpen")
const onMessage = socketMiddleware.__get__("onMessage")
const initSocket = socketMiddleware.__get__("initSocket")
// @ponicode
describe("onOpen", () => {
    test("0", () => {
        let callFunction = () => {
            onOpen(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onOpen(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onOpen(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onMessage", () => {
    test("0", () => {
        let callFunction = () => {
            onMessage(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onMessage(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onMessage(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("initSocket", () => {
    test("0", () => {
        let callFunction = () => {
            initSocket(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            initSocket(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            initSocket(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("socketMiddleware.default", () => {
    test("0", () => {
        let callFunction = () => {
            socketMiddleware.default(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            socketMiddleware.default(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            socketMiddleware.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
