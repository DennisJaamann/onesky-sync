#!/usr/bin/env node

const meow = require("meow");
const oneskySync = require(".");

const cli = meow(
  `
    Usage
      $ onesky-sync upload <input> [options]
      $ onesky-sync downloadMulti <ouput> [options]
      $ onesky-sync downloadAll <ouput> [options]
 
    Options
      --api-key         Required
      --secret          Required
      --project-id      Required
      
      Download Multi
        --language
        --file-name     Required

      Download All
        --language
      
      Upload
        --language=en
        --file-name
        --format=HIERARCHICAL_JSON
        --content
        --keep-strings=false
        --allow-same-as-original=false
        
    Example
      $ onesky-sync upload ./translations/*.json --api-key=111 --secret=111 --project-id=111
      $ onesky-sync downloadAll ./translations --api-key=111 --secret=111 --project-id=111
`,
  {
    flags: {
      keepStrings: {
        type: "boolean",
        default: false
      },
      allowSameAsOriginal: {
        type: "boolean",
        default: false
      }
    }
  }
);

const [command, ...files] = cli.input;

oneskySync(command, files, cli.flags);
