/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"typefile":3,"EOF":4,"body":5,"pair":6,"TERMINATOR":7,"IDENTIFIER":8,":":9,"type":10,"TYPE":11,"optDataParamList":12,"optTypeParamList":13,"FUNCTION":14,"(":15,"optTypeFunctionArgList":16,")":17,"GENERIC":18,"[":19,"]":20,"typeList":21,"{":22,"optTypePairs":23,"}":24,",":25,"typeParamList":26,"typeFunctionArgList":27,"keywordOrIdentifier":28,"dataParamList":29,"THEN":30,"ELSE":31,"DATA":32,"MATCH":33,"CASE":34,"DO":35,"RETURN":36,"MACRO":37,"WITH":38,"WHERE":39,"$accept":0,"$end":1},
terminals_: {2:"error",4:"EOF",7:"TERMINATOR",8:"IDENTIFIER",9:":",11:"TYPE",14:"FUNCTION",15:"(",17:")",18:"GENERIC",19:"[",20:"]",22:"{",24:"}",25:",",30:"THEN",31:"ELSE",32:"DATA",33:"MATCH",34:"CASE",35:"DO",36:"RETURN",37:"MACRO",38:"WITH",39:"WHERE"},
productions_: [0,[3,1],[3,2],[5,1],[5,3],[5,2],[6,3],[6,3],[10,2],[10,4],[10,1],[10,3],[10,3],[10,3],[21,1],[21,3],[13,0],[13,1],[26,1],[26,1],[26,3],[26,2],[26,2],[26,4],[16,0],[16,1],[27,1],[27,3],[23,0],[23,3],[23,5],[29,1],[29,2],[12,0],[12,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return {};
break;
case 2:return $$[$0-1];
break;
case 3:this.$ = {types: {}, env: {}}; if($$[$0].data) { this.$.types[$$[$0].name] = $$[$0].params; } else { this.$.env[$$[$0].name] = $$[$0].type; }
break;
case 4:this.$ = $$[$0-2]; if($$[$0].data) { this.$.types[$$[$0].name] = $$[$0].params; } else { this.$.env[$$[$0].name] = $$[$0].type; }
break;
case 5:this.$ = $$[$0-1];
break;
case 6:this.$ = {name: $$[$0-2], type: $$[$0], data: false};
break;
case 7:this.$ = {name: $$[$0-1], params: $$[$0], data: true};
break;
case 8:this.$ = new yy.TypeName($$[$0-1], $$[$0]);
break;
case 9:this.$ = new yy.TypeFunction($$[$0-1]);
break;
case 10:this.$ = new yy.Generic($$[$0]);
break;
case 11:this.$ = new yy.TypeArray($$[$0-1]);
break;
case 12:this.$ = new yy.TypeObject($$[$0-1]);
break;
case 13:this.$ = new yy.TypeObject($$[$0-1]);
break;
case 14:this.$ = [$$[$0]];
break;
case 15:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
case 16:this.$ = [];
break;
case 17:this.$ = $$[$0];
break;
case 18:this.$ = [new yy.TypeName($$[$0], [])];
break;
case 19:this.$ = [new yy.Generic($$[$0], [])];
break;
case 20:this.$ = [$$[$0-1]];
break;
case 21:this.$ = $$[$0-1]; $$[$0-1].push(new yy.TypeName($$[$0], []));
break;
case 22:this.$ = $$[$0-1]; $$[$0-1].push(new yy.Generic($$[$0], []));
break;
case 23:this.$ = $$[$0-3]; $$[$0-3].push($$[$0-1]);
break;
case 24:this.$ = [];
break;
case 25:this.$ = $$[$0];
break;
case 26:this.$ = [$$[$0]];
break;
case 27:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
case 28:this.$ = {};
break;
case 29:this.$ = {}; this.$[$$[$0-2]] = $$[$0];
break;
case 30:this.$ = $$[$0-4]; $$[$0-4][$$[$0-2]] = $$[$0];
break;
case 31:this.$ = [new yy.Arg($$[$0])];
break;
case 32:this.$ = $$[$0-1]; $$[$0-1].push(new yy.Arg($$[$0]));
break;
case 33:this.$ = [];
break;
case 34:this.$ = $$[$0];
break;
case 35:this.$ = $$[$0];
break;
case 36:this.$ = $$[$0];
break;
case 37:this.$ = $$[$0];
break;
case 38:this.$ = $$[$0];
break;
case 39:this.$ = $$[$0];
break;
case 40:this.$ = $$[$0];
break;
case 41:this.$ = $$[$0];
break;
case 42:this.$ = $$[$0];
break;
case 43:this.$ = $$[$0];
break;
case 44:this.$ = $$[$0];
break;
case 45:this.$ = $$[$0];
break;
case 46:this.$ = $$[$0];
break;
}
},
table: [{3:1,4:[1,2],5:3,6:4,8:[1,5],11:[1,6]},{1:[3]},{1:[2,1]},{4:[1,7],7:[1,8]},{4:[2,3],7:[2,3]},{9:[1,9]},{8:[1,10]},{1:[2,2]},{4:[2,5],6:11,7:[2,5],8:[1,5],11:[1,6]},{8:[1,13],10:12,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{4:[2,33],7:[2,33],8:[1,21],12:19,29:20},{4:[2,4],7:[2,4]},{4:[2,6],7:[2,6]},{4:[2,16],7:[2,16],8:[1,24],13:22,15:[1,26],17:[2,16],18:[1,25],20:[2,16],24:[2,16],25:[2,16],26:23},{15:[1,27]},{4:[2,10],7:[2,10],17:[2,10],20:[2,10],24:[2,10],25:[2,10]},{8:[1,13],10:28,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{8:[1,13],10:30,14:[1,14],15:[1,17],18:[1,15],19:[1,16],21:29,22:[1,18]},{8:[1,44],11:[1,36],23:31,24:[2,28],25:[2,28],28:32,30:[1,33],31:[1,34],32:[1,35],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43]},{4:[2,7],7:[2,7]},{4:[2,34],7:[2,34],8:[1,45]},{4:[2,31],7:[2,31],8:[2,31]},{4:[2,8],7:[2,8],17:[2,8],20:[2,8],24:[2,8],25:[2,8]},{4:[2,17],7:[2,17],8:[1,46],15:[1,48],17:[2,17],18:[1,47],20:[2,17],24:[2,17],25:[2,17]},{4:[2,18],7:[2,18],8:[2,18],15:[2,18],17:[2,18],18:[2,18],20:[2,18],24:[2,18],25:[2,18]},{4:[2,19],7:[2,19],8:[2,19],15:[2,19],17:[2,19],18:[2,19],20:[2,19],24:[2,19],25:[2,19]},{8:[1,13],10:49,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{8:[1,13],10:52,14:[1,14],15:[1,17],16:50,17:[2,24],18:[1,15],19:[1,16],22:[1,18],27:51},{20:[1,53]},{17:[1,54],25:[1,55]},{17:[2,14],25:[2,14]},{24:[1,56],25:[1,57]},{9:[1,58]},{9:[2,35]},{9:[2,36]},{9:[2,37]},{9:[2,38]},{9:[2,39]},{9:[2,40]},{9:[2,41]},{9:[2,42]},{9:[2,43]},{9:[2,44]},{9:[2,45]},{9:[2,46]},{4:[2,32],7:[2,32],8:[2,32]},{4:[2,21],7:[2,21],8:[2,21],15:[2,21],17:[2,21],18:[2,21],20:[2,21],24:[2,21],25:[2,21]},{4:[2,22],7:[2,22],8:[2,22],15:[2,22],17:[2,22],18:[2,22],20:[2,22],24:[2,22],25:[2,22]},{8:[1,13],10:59,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{17:[1,60]},{17:[1,61]},{17:[2,25],25:[1,62]},{17:[2,26],25:[2,26]},{4:[2,11],7:[2,11],17:[2,11],20:[2,11],24:[2,11],25:[2,11]},{4:[2,12],7:[2,12],17:[2,12],20:[2,12],24:[2,12],25:[2,12]},{8:[1,13],10:63,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{4:[2,13],7:[2,13],17:[2,13],20:[2,13],24:[2,13],25:[2,13]},{8:[1,44],11:[1,36],28:64,30:[1,33],31:[1,34],32:[1,35],33:[1,37],34:[1,38],35:[1,39],36:[1,40],37:[1,41],38:[1,42],39:[1,43]},{8:[1,13],10:65,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{17:[1,66]},{4:[2,20],7:[2,20],8:[2,20],15:[2,20],17:[2,20],18:[2,20],20:[2,20],24:[2,20],25:[2,20]},{4:[2,9],7:[2,9],17:[2,9],20:[2,9],24:[2,9],25:[2,9]},{8:[1,13],10:67,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{17:[2,15],25:[2,15]},{9:[1,68]},{24:[2,29],25:[2,29]},{4:[2,23],7:[2,23],8:[2,23],15:[2,23],17:[2,23],18:[2,23],20:[2,23],24:[2,23],25:[2,23]},{17:[2,27],25:[2,27]},{8:[1,13],10:69,14:[1,14],15:[1,17],18:[1,15],19:[1,16],22:[1,18]},{24:[2,30],25:[2,30]}],
defaultActions: {2:[2,1],7:[2,2],33:[2,35],34:[2,36],35:[2,37],36:[2,38],37:[2,39],38:[2,40],39:[2,41],40:[2,42],41:[2,43],42:[2,44],43:[2,45],44:[2,46]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}