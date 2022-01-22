let data = [
    { title: "The Only Guide You need", score: 8, status: "Posted" },
    { title: "The Advanced Guide To Archive", score: 5, status: "Unposted" },
    { title: "In Defense of the Figurative Use of Literally", score: 6, status: "Unposted" },
    { title: "The Best Ways to Do Market Research For Your Bussiness Plan", score: 7, status: "Unposted" },
    { title: "The Only Guide You Need Part 2", score: 8, status: "Unposted" },
    ];
    for (var i = 0; i < data.length; i++) {
        if (data[i].score > 7) {
            data[i].status = "Posted";
        }
    }
    console.log(data);
