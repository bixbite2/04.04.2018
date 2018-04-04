const Text = {
    reverse: function(str) {
        let r = '';
        for (let i = str.length - 1; i >= 0; i--) {
            r += str[i];
        }
        return r;
    },
    palindrome: function(str) {
        return Text.reverse(str) === str;
        //text pode chamar de this;
    }
};