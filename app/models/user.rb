class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true
  validates :password_hash, presence: true
  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(password)
    self.password = password
  end
end
