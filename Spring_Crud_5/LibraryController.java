package com.wecp.library.controller;

import com.wecp.library.controller.exception.BookNotAvailableException;
import com.wecp.library.domain.Book;
import com.wecp.library.domain.Issue;
import com.wecp.library.repository.BookRepository;
import com.wecp.library.repository.IssueRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

/**
 * REST controller for managing library system process
 */
@RestController
@RequestMapping("/api/v1")
public class LibraryController {

    @Autowired
    private BookRepository bookRepository;
    
    @Autowired
    private IssueRepository issueRepository;


    /**
     * {@code POST  /issueBook} : Create a new issue.
     *
     * @param issue the issue to create.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the new issue.
     * throw {@link BookNotAvailableException} if the wanted books quantity is zero
     */
    @PostMapping("/issueBook")
    public ResponseEntity<Issue> issueBook(@RequestBody Issue issue) {
        Book book = issue.getBook();
        if (book.getQuantity() == 0) {
            throw new BookNotAvailableException("Book is not available for issuing.");
        }

        book.setQuantity(book.getQuantity() - 1);
        bookRepository.save(book);

        Issue savedIssue = issueRepository.save(issue);
        return ResponseEntity.ok(savedIssue);
    }


    /**
     * {@code POST  /depositBook} : Inquiry the issue if there is a fine
     *
     * @param issue the issue to inquiry.
     * @return the Mono with fine or just return 0
     */
    @PostMapping("/depositBook")
    public Mono<Integer> depositBook(@RequestBody Issue issue) {
        LocalDate issueDate = issue.getIssueDate();
    LocalDate returnDate = issue.getReturnDate();
    int period = issue.getPeriod();

    long actualDays = ChronoUnit.DAYS.between(issueDate, returnDate);

    int fine = 0;
    if (actualDays > period) {
        fine = issue.getFine();
    }

    return Mono.just(fine);
}
}
