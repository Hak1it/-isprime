const  http  =  require("http");

const server  =  http.createServer(function(req, res)  {
    res.writeHead(200);
    res.end(isprime(Number(req.url.split("/")[1])));

    function isprime(num){
        let isPrime = true;

        if (num === 1) {
            res.write("1");
        }else if (num > 1) {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }if (isPrime) {
                res.write("1");
            } else {
                res.write("0");
            }
        }else {
            res.write("0");
        }
    }
});


server.listen(3330);