def square_diff(num)
    i = 1
    sum_each = 0
    sum_tot = 0
    sum = 0
    while i <= num do
        sum_each += (i ** 2)
        sum += i
        sum_tot = (sum ** 2)
        i += 1
    end
    puts sum_tot - sum_each
end

square_diff(100)
