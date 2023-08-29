const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try{
            core.notice("Hello World");
        }catch(error){
            core.setFailed(error.message);
        }
    }
)