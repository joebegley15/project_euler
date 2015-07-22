function squareDiff(num) {
    var sum_each = 0
    var sum_tot = 0
    var sum = 0
    for (i = 1; i <= num; i++) {
        sum_each += (i * i)
        sum += i
    }
    sum_tot += (sum * sum)
    var answer = sum_tot - sum_each
    return sum_tot - sum_each
}

squareDiff(10)
