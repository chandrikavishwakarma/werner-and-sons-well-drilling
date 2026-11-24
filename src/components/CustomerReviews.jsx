import yelpReviews from '../data/yelpReviews';

export default function CustomerReviews() {
  return (
    <div className="customer-reviews reveal" aria-labelledby="customer-reviews-title">
      <div className="reviews-header">
        <span className="eyebrow">Customer Feedback</span>
        <h2 id="customer-reviews-title"> Customer Reviews from Yelp</h2>
        <p className="reviews-intro">
          Kind words from customers who have trusted Werner &amp; Sons with their water and well-service needs.
        </p>
      </div>

      <div className="reviews-grid">
        {yelpReviews.map((review) => (
          <article className="review-card" key={review.id} aria-label={`Review by ${review.author}`}>
            <div className="review-card-top">
              <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <time className="review-date" dateTime={review.dateIso}>
                {review.date}
              </time>
            </div>

            <blockquote className="review-quote">
              <p>&ldquo;{review.excerpt}&rdquo;</p>
            </blockquote>

            <div className="review-footer">
              <div className="review-author-info">
                <strong className="review-author">{review.author}</strong>
                <span className="review-location">{review.location}</span>
              </div>
              <span className="review-badge">Yelp Review</span>
            </div>
          </article>
        ))}
      </div>

      <div className="reviews-cta-row">
        <a
          className="btn-yelp-link"
          href="https://www.yelp.com/biz/werner-and-sons-well-drilling-easton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read all reviews on Yelp
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
