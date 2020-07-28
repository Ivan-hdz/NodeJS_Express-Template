snapshotToArray = (snapshot) => {
    const returnArr = [];

    snapshot.forEach((doc) => {
        let obj = doc.data();
        obj.id = doc.id;
        returnArr.push(obj);
    });

    return returnArr;
};
module.exports = { snapshotToArray };
