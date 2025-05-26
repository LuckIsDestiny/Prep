@Service
public class BookingService {
    private static int counter = 0;
    private final List<Booking> bookingList = new ArrayList<>();

    public Booking addBooking(Booking booking) {
        booking.setId(++counter);
        bookingList.add(booking);
        return booking;
    }

    public Booking getBookingById(int id) {
        return bookingList.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }
}


‐---------------------------------------------------------------------------

public Booking getBookingById(int id) {
for (Booking b : bookingList) {
    if (b.getId() == id) {
        return b;
    }
}
return null;
}