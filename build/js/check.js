function getMessage(a, b) {

    if (typeof(a) == 'boolean') {
        if (a) {
            return 'Я попал в ' + b;
        } else {
            return 'Я никуда не попал';
        }
    } else {
        if (typeof(a) == 'number') {
            return 'Я прыгнул на ' + (a * 100) +' сантиметров';
        } else {
            if (Array.isArray(a) && Array.isArray(b)) {
                var length = 0;
                a.forEach(function(item, i){
                    return length += item * b[i];
                });
                return 'Я прошел ' + length + ' метров';
            } else {
                if ( Array.isArray(a) ) {
                  var a = [1, 2, 3, 4];
                  var steps = a.reduce(function(sum, current) {
                  return sum + current;
                }, 0);
                return 'Я прошел ' + steps + ' шагов';
                }
            }
        }
    }
}
