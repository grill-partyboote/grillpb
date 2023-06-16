# grillpb
Grill Party Boote website


### FAQ

> How to run in docker?

1. Build image: `make build`
2. Build static: `make static`
3. Run containers: `make up`
4. Open http://localhost:5555/static/index.html

> How to provide BACKEND_ADDRESS env for static building?

Just specify it like this: 

`BACKEND_ADDRESS='http://localhost:6996/static/' make static`