
const users = ['928g9', '928g8', '928d9', '926g9'];
const mockedResponse = {
    Username: 'someString',
    Id: 'someString',
    Email: 'someEmail',
    firstName: 'Bill',
    lastName: 'Jones'
};
const getUserById = async (userId) => {
    return Promise.resolve({ ...mockedResponse, Id: userId });
}
const sendEmail = async (user) => {
    return new Date()%2===0?200:500;
}
const run = async () => {
    await Promise.all(
        users.map(user => {
            getUserById(user).then(() => sendEmail(user)).then(result => result===200? console.log('email sent'): console.log('error sending an email'));
        })
    );
}

run();