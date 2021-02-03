(function test() {
    var test = {
    property: 'Value',
    
    getPropertyValue: function () {
    return this.property;
    }
    };
    
    var getPropertyValue = test.getPropertyValue;
    
    console.log(
    getPropertyValue(),
    test.getPropertyValue()
    );
    })();


// (function test() {
//     function fn() {
//     arguments.callee.count = arguments.callee.count || 0;
//     return arguments.callee.count++;
//     }
    
//     console.log(
//     fn(),
//     fn(),
//     fn()
//     );
//     })();

// const createMember = ({ email, address = {}}) => {
//     const validEmail = /.+\@.+\..+/.test(email)
//     if (!validEmail) throw new Error("Valid email pls")
    
//     return {
//     email,
//     address: address ? address : null
//     }
//     }
    
//     const member = createMember({ email: "my@email.com" })
//     console.log(member)