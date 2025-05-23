@RestController
@RequestMapping("/bookings")
public class BookingController {

    @PostMapping
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
        return new ResponseEntity<>(bookingService.addBooking(booking), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable int id) {
        Booking book = bookingService.getBookingById(id);
        return (book != null) ? new ResponseEntity<>(book, HttpStatus.OK)
                              : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
