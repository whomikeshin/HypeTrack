class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, :email, :session_token, uniqueness: true
  validates_format_of :email, with: /@/
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :password_digest, :session_token, :activation_token, presence: true
  # add in activation_token

  has_many :follows, dependent: :destroy
  has_many :blog_follows, through: :follows, source: :blog
  has_many :artist_follows, through: :follows, source: :artist

  has_many :favorites, dependent: :destroy
  has_many :favorite_tracks, through: :favorites, source: :track

  # add in find by email option
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
